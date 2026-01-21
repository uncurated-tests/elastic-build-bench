'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly268<T> = T extends (infer U)[]
  ? DeepReadonlyArray268<U>
  : T extends object
  ? DeepReadonlyObject268<T>
  : T;

interface DeepReadonlyArray268<T> extends ReadonlyArray<DeepReadonly268<T>> {}

type DeepReadonlyObject268<T> = {
  readonly [P in keyof T]: DeepReadonly268<T[P]>;
};

type UnionToIntersection268<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf268<T> = UnionToIntersection268<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push268<T extends unknown[], V> = [...T, V];

type TuplifyUnion268<T, L = LastOf268<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push268<TuplifyUnion268<Exclude<T, L>>, L>;

type DeepPartial268<T> = T extends object
  ? { [P in keyof T]?: DeepPartial268<T[P]> }
  : T;

type Paths268<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join268<K, Paths268<T[K], Prev268[D]>> : never }[keyof T]
  : never;

type Prev268 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join268<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig268 {
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

type ConfigPaths268 = Paths268<NestedConfig268>;

interface HeavyProps268 {
  config: DeepPartial268<NestedConfig268>;
  path?: ConfigPaths268;
}

const HeavyComponent268 = memo(function HeavyComponent268({ config }: HeavyProps268) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 268) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-268 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H268: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent268.displayName = 'HeavyComponent268';
export default HeavyComponent268;
