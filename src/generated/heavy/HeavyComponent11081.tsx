'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11081<T> = T extends (infer U)[]
  ? DeepReadonlyArray11081<U>
  : T extends object
  ? DeepReadonlyObject11081<T>
  : T;

interface DeepReadonlyArray11081<T> extends ReadonlyArray<DeepReadonly11081<T>> {}

type DeepReadonlyObject11081<T> = {
  readonly [P in keyof T]: DeepReadonly11081<T[P]>;
};

type UnionToIntersection11081<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11081<T> = UnionToIntersection11081<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11081<T extends unknown[], V> = [...T, V];

type TuplifyUnion11081<T, L = LastOf11081<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11081<TuplifyUnion11081<Exclude<T, L>>, L>;

type DeepPartial11081<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11081<T[P]> }
  : T;

type Paths11081<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11081<K, Paths11081<T[K], Prev11081[D]>> : never }[keyof T]
  : never;

type Prev11081 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11081<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11081 {
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

type ConfigPaths11081 = Paths11081<NestedConfig11081>;

interface HeavyProps11081 {
  config: DeepPartial11081<NestedConfig11081>;
  path?: ConfigPaths11081;
}

const HeavyComponent11081 = memo(function HeavyComponent11081({ config }: HeavyProps11081) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11081) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11081 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11081: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11081.displayName = 'HeavyComponent11081';
export default HeavyComponent11081;
