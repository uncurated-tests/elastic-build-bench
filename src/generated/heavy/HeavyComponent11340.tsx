'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11340<T> = T extends (infer U)[]
  ? DeepReadonlyArray11340<U>
  : T extends object
  ? DeepReadonlyObject11340<T>
  : T;

interface DeepReadonlyArray11340<T> extends ReadonlyArray<DeepReadonly11340<T>> {}

type DeepReadonlyObject11340<T> = {
  readonly [P in keyof T]: DeepReadonly11340<T[P]>;
};

type UnionToIntersection11340<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11340<T> = UnionToIntersection11340<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11340<T extends unknown[], V> = [...T, V];

type TuplifyUnion11340<T, L = LastOf11340<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11340<TuplifyUnion11340<Exclude<T, L>>, L>;

type DeepPartial11340<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11340<T[P]> }
  : T;

type Paths11340<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11340<K, Paths11340<T[K], Prev11340[D]>> : never }[keyof T]
  : never;

type Prev11340 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11340<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11340 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths11340 = Paths11340<NestedConfig11340>;

interface HeavyProps11340 {
  config: DeepPartial11340<NestedConfig11340>;
  path?: ConfigPaths11340;
}

const HeavyComponent11340 = memo(function HeavyComponent11340({ config }: HeavyProps11340) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11340) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11340 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11340: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11340.displayName = 'HeavyComponent11340';
export default HeavyComponent11340;
