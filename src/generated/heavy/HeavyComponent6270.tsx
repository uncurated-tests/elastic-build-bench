'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6270<T> = T extends (infer U)[]
  ? DeepReadonlyArray6270<U>
  : T extends object
  ? DeepReadonlyObject6270<T>
  : T;

interface DeepReadonlyArray6270<T> extends ReadonlyArray<DeepReadonly6270<T>> {}

type DeepReadonlyObject6270<T> = {
  readonly [P in keyof T]: DeepReadonly6270<T[P]>;
};

type UnionToIntersection6270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6270<T> = UnionToIntersection6270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6270<T extends unknown[], V> = [...T, V];

type TuplifyUnion6270<T, L = LastOf6270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6270<TuplifyUnion6270<Exclude<T, L>>, L>;

type DeepPartial6270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6270<T[P]> }
  : T;

type Paths6270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6270<K, Paths6270<T[K], Prev6270[D]>> : never }[keyof T]
  : never;

type Prev6270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6270 {
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

type ConfigPaths6270 = Paths6270<NestedConfig6270>;

interface HeavyProps6270 {
  config: DeepPartial6270<NestedConfig6270>;
  path?: ConfigPaths6270;
}

const HeavyComponent6270 = memo(function HeavyComponent6270({ config }: HeavyProps6270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6270.displayName = 'HeavyComponent6270';
export default HeavyComponent6270;
