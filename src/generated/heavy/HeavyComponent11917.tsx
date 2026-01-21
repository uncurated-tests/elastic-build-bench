'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11917<T> = T extends (infer U)[]
  ? DeepReadonlyArray11917<U>
  : T extends object
  ? DeepReadonlyObject11917<T>
  : T;

interface DeepReadonlyArray11917<T> extends ReadonlyArray<DeepReadonly11917<T>> {}

type DeepReadonlyObject11917<T> = {
  readonly [P in keyof T]: DeepReadonly11917<T[P]>;
};

type UnionToIntersection11917<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11917<T> = UnionToIntersection11917<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11917<T extends unknown[], V> = [...T, V];

type TuplifyUnion11917<T, L = LastOf11917<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11917<TuplifyUnion11917<Exclude<T, L>>, L>;

type DeepPartial11917<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11917<T[P]> }
  : T;

type Paths11917<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11917<K, Paths11917<T[K], Prev11917[D]>> : never }[keyof T]
  : never;

type Prev11917 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11917<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11917 {
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

type ConfigPaths11917 = Paths11917<NestedConfig11917>;

interface HeavyProps11917 {
  config: DeepPartial11917<NestedConfig11917>;
  path?: ConfigPaths11917;
}

const HeavyComponent11917 = memo(function HeavyComponent11917({ config }: HeavyProps11917) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11917) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11917 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11917: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11917.displayName = 'HeavyComponent11917';
export default HeavyComponent11917;
