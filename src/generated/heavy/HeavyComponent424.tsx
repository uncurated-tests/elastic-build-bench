'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly424<T> = T extends (infer U)[]
  ? DeepReadonlyArray424<U>
  : T extends object
  ? DeepReadonlyObject424<T>
  : T;

interface DeepReadonlyArray424<T> extends ReadonlyArray<DeepReadonly424<T>> {}

type DeepReadonlyObject424<T> = {
  readonly [P in keyof T]: DeepReadonly424<T[P]>;
};

type UnionToIntersection424<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf424<T> = UnionToIntersection424<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push424<T extends unknown[], V> = [...T, V];

type TuplifyUnion424<T, L = LastOf424<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push424<TuplifyUnion424<Exclude<T, L>>, L>;

type DeepPartial424<T> = T extends object
  ? { [P in keyof T]?: DeepPartial424<T[P]> }
  : T;

type Paths424<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join424<K, Paths424<T[K], Prev424[D]>> : never }[keyof T]
  : never;

type Prev424 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join424<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig424 {
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

type ConfigPaths424 = Paths424<NestedConfig424>;

interface HeavyProps424 {
  config: DeepPartial424<NestedConfig424>;
  path?: ConfigPaths424;
}

const HeavyComponent424 = memo(function HeavyComponent424({ config }: HeavyProps424) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 424) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-424 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H424: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent424.displayName = 'HeavyComponent424';
export default HeavyComponent424;
