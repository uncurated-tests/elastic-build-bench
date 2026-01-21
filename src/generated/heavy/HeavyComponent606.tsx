'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly606<T> = T extends (infer U)[]
  ? DeepReadonlyArray606<U>
  : T extends object
  ? DeepReadonlyObject606<T>
  : T;

interface DeepReadonlyArray606<T> extends ReadonlyArray<DeepReadonly606<T>> {}

type DeepReadonlyObject606<T> = {
  readonly [P in keyof T]: DeepReadonly606<T[P]>;
};

type UnionToIntersection606<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf606<T> = UnionToIntersection606<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push606<T extends unknown[], V> = [...T, V];

type TuplifyUnion606<T, L = LastOf606<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push606<TuplifyUnion606<Exclude<T, L>>, L>;

type DeepPartial606<T> = T extends object
  ? { [P in keyof T]?: DeepPartial606<T[P]> }
  : T;

type Paths606<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join606<K, Paths606<T[K], Prev606[D]>> : never }[keyof T]
  : never;

type Prev606 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join606<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig606 {
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

type ConfigPaths606 = Paths606<NestedConfig606>;

interface HeavyProps606 {
  config: DeepPartial606<NestedConfig606>;
  path?: ConfigPaths606;
}

const HeavyComponent606 = memo(function HeavyComponent606({ config }: HeavyProps606) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 606) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-606 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H606: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent606.displayName = 'HeavyComponent606';
export default HeavyComponent606;
