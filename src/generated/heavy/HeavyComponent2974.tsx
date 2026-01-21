'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2974<T> = T extends (infer U)[]
  ? DeepReadonlyArray2974<U>
  : T extends object
  ? DeepReadonlyObject2974<T>
  : T;

interface DeepReadonlyArray2974<T> extends ReadonlyArray<DeepReadonly2974<T>> {}

type DeepReadonlyObject2974<T> = {
  readonly [P in keyof T]: DeepReadonly2974<T[P]>;
};

type UnionToIntersection2974<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2974<T> = UnionToIntersection2974<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2974<T extends unknown[], V> = [...T, V];

type TuplifyUnion2974<T, L = LastOf2974<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2974<TuplifyUnion2974<Exclude<T, L>>, L>;

type DeepPartial2974<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2974<T[P]> }
  : T;

type Paths2974<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2974<K, Paths2974<T[K], Prev2974[D]>> : never }[keyof T]
  : never;

type Prev2974 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2974<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2974 {
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

type ConfigPaths2974 = Paths2974<NestedConfig2974>;

interface HeavyProps2974 {
  config: DeepPartial2974<NestedConfig2974>;
  path?: ConfigPaths2974;
}

const HeavyComponent2974 = memo(function HeavyComponent2974({ config }: HeavyProps2974) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2974) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2974 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2974: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2974.displayName = 'HeavyComponent2974';
export default HeavyComponent2974;
