'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2221<T> = T extends (infer U)[]
  ? DeepReadonlyArray2221<U>
  : T extends object
  ? DeepReadonlyObject2221<T>
  : T;

interface DeepReadonlyArray2221<T> extends ReadonlyArray<DeepReadonly2221<T>> {}

type DeepReadonlyObject2221<T> = {
  readonly [P in keyof T]: DeepReadonly2221<T[P]>;
};

type UnionToIntersection2221<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2221<T> = UnionToIntersection2221<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2221<T extends unknown[], V> = [...T, V];

type TuplifyUnion2221<T, L = LastOf2221<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2221<TuplifyUnion2221<Exclude<T, L>>, L>;

type DeepPartial2221<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2221<T[P]> }
  : T;

type Paths2221<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2221<K, Paths2221<T[K], Prev2221[D]>> : never }[keyof T]
  : never;

type Prev2221 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2221<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2221 {
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

type ConfigPaths2221 = Paths2221<NestedConfig2221>;

interface HeavyProps2221 {
  config: DeepPartial2221<NestedConfig2221>;
  path?: ConfigPaths2221;
}

const HeavyComponent2221 = memo(function HeavyComponent2221({ config }: HeavyProps2221) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2221) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2221 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2221: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2221.displayName = 'HeavyComponent2221';
export default HeavyComponent2221;
