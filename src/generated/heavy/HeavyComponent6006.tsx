'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6006<T> = T extends (infer U)[]
  ? DeepReadonlyArray6006<U>
  : T extends object
  ? DeepReadonlyObject6006<T>
  : T;

interface DeepReadonlyArray6006<T> extends ReadonlyArray<DeepReadonly6006<T>> {}

type DeepReadonlyObject6006<T> = {
  readonly [P in keyof T]: DeepReadonly6006<T[P]>;
};

type UnionToIntersection6006<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6006<T> = UnionToIntersection6006<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6006<T extends unknown[], V> = [...T, V];

type TuplifyUnion6006<T, L = LastOf6006<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6006<TuplifyUnion6006<Exclude<T, L>>, L>;

type DeepPartial6006<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6006<T[P]> }
  : T;

type Paths6006<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6006<K, Paths6006<T[K], Prev6006[D]>> : never }[keyof T]
  : never;

type Prev6006 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6006<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6006 {
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

type ConfigPaths6006 = Paths6006<NestedConfig6006>;

interface HeavyProps6006 {
  config: DeepPartial6006<NestedConfig6006>;
  path?: ConfigPaths6006;
}

const HeavyComponent6006 = memo(function HeavyComponent6006({ config }: HeavyProps6006) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6006) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6006 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6006: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6006.displayName = 'HeavyComponent6006';
export default HeavyComponent6006;
