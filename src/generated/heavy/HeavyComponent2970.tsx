'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2970<T> = T extends (infer U)[]
  ? DeepReadonlyArray2970<U>
  : T extends object
  ? DeepReadonlyObject2970<T>
  : T;

interface DeepReadonlyArray2970<T> extends ReadonlyArray<DeepReadonly2970<T>> {}

type DeepReadonlyObject2970<T> = {
  readonly [P in keyof T]: DeepReadonly2970<T[P]>;
};

type UnionToIntersection2970<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2970<T> = UnionToIntersection2970<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2970<T extends unknown[], V> = [...T, V];

type TuplifyUnion2970<T, L = LastOf2970<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2970<TuplifyUnion2970<Exclude<T, L>>, L>;

type DeepPartial2970<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2970<T[P]> }
  : T;

type Paths2970<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2970<K, Paths2970<T[K], Prev2970[D]>> : never }[keyof T]
  : never;

type Prev2970 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2970<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2970 {
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

type ConfigPaths2970 = Paths2970<NestedConfig2970>;

interface HeavyProps2970 {
  config: DeepPartial2970<NestedConfig2970>;
  path?: ConfigPaths2970;
}

const HeavyComponent2970 = memo(function HeavyComponent2970({ config }: HeavyProps2970) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2970) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2970 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2970: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2970.displayName = 'HeavyComponent2970';
export default HeavyComponent2970;
