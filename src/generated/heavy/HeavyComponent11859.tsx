'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11859<T> = T extends (infer U)[]
  ? DeepReadonlyArray11859<U>
  : T extends object
  ? DeepReadonlyObject11859<T>
  : T;

interface DeepReadonlyArray11859<T> extends ReadonlyArray<DeepReadonly11859<T>> {}

type DeepReadonlyObject11859<T> = {
  readonly [P in keyof T]: DeepReadonly11859<T[P]>;
};

type UnionToIntersection11859<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11859<T> = UnionToIntersection11859<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11859<T extends unknown[], V> = [...T, V];

type TuplifyUnion11859<T, L = LastOf11859<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11859<TuplifyUnion11859<Exclude<T, L>>, L>;

type DeepPartial11859<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11859<T[P]> }
  : T;

type Paths11859<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11859<K, Paths11859<T[K], Prev11859[D]>> : never }[keyof T]
  : never;

type Prev11859 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11859<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11859 {
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

type ConfigPaths11859 = Paths11859<NestedConfig11859>;

interface HeavyProps11859 {
  config: DeepPartial11859<NestedConfig11859>;
  path?: ConfigPaths11859;
}

const HeavyComponent11859 = memo(function HeavyComponent11859({ config }: HeavyProps11859) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11859) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11859 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11859: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11859.displayName = 'HeavyComponent11859';
export default HeavyComponent11859;
