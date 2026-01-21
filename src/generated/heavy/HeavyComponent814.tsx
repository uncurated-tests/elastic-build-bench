'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly814<T> = T extends (infer U)[]
  ? DeepReadonlyArray814<U>
  : T extends object
  ? DeepReadonlyObject814<T>
  : T;

interface DeepReadonlyArray814<T> extends ReadonlyArray<DeepReadonly814<T>> {}

type DeepReadonlyObject814<T> = {
  readonly [P in keyof T]: DeepReadonly814<T[P]>;
};

type UnionToIntersection814<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf814<T> = UnionToIntersection814<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push814<T extends unknown[], V> = [...T, V];

type TuplifyUnion814<T, L = LastOf814<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push814<TuplifyUnion814<Exclude<T, L>>, L>;

type DeepPartial814<T> = T extends object
  ? { [P in keyof T]?: DeepPartial814<T[P]> }
  : T;

type Paths814<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join814<K, Paths814<T[K], Prev814[D]>> : never }[keyof T]
  : never;

type Prev814 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join814<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig814 {
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

type ConfigPaths814 = Paths814<NestedConfig814>;

interface HeavyProps814 {
  config: DeepPartial814<NestedConfig814>;
  path?: ConfigPaths814;
}

const HeavyComponent814 = memo(function HeavyComponent814({ config }: HeavyProps814) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 814) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-814 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H814: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent814.displayName = 'HeavyComponent814';
export default HeavyComponent814;
