'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11605<T> = T extends (infer U)[]
  ? DeepReadonlyArray11605<U>
  : T extends object
  ? DeepReadonlyObject11605<T>
  : T;

interface DeepReadonlyArray11605<T> extends ReadonlyArray<DeepReadonly11605<T>> {}

type DeepReadonlyObject11605<T> = {
  readonly [P in keyof T]: DeepReadonly11605<T[P]>;
};

type UnionToIntersection11605<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11605<T> = UnionToIntersection11605<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11605<T extends unknown[], V> = [...T, V];

type TuplifyUnion11605<T, L = LastOf11605<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11605<TuplifyUnion11605<Exclude<T, L>>, L>;

type DeepPartial11605<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11605<T[P]> }
  : T;

type Paths11605<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11605<K, Paths11605<T[K], Prev11605[D]>> : never }[keyof T]
  : never;

type Prev11605 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11605<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11605 {
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

type ConfigPaths11605 = Paths11605<NestedConfig11605>;

interface HeavyProps11605 {
  config: DeepPartial11605<NestedConfig11605>;
  path?: ConfigPaths11605;
}

const HeavyComponent11605 = memo(function HeavyComponent11605({ config }: HeavyProps11605) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11605) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11605 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11605: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11605.displayName = 'HeavyComponent11605';
export default HeavyComponent11605;
