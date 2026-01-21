'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6326<T> = T extends (infer U)[]
  ? DeepReadonlyArray6326<U>
  : T extends object
  ? DeepReadonlyObject6326<T>
  : T;

interface DeepReadonlyArray6326<T> extends ReadonlyArray<DeepReadonly6326<T>> {}

type DeepReadonlyObject6326<T> = {
  readonly [P in keyof T]: DeepReadonly6326<T[P]>;
};

type UnionToIntersection6326<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6326<T> = UnionToIntersection6326<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6326<T extends unknown[], V> = [...T, V];

type TuplifyUnion6326<T, L = LastOf6326<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6326<TuplifyUnion6326<Exclude<T, L>>, L>;

type DeepPartial6326<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6326<T[P]> }
  : T;

type Paths6326<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6326<K, Paths6326<T[K], Prev6326[D]>> : never }[keyof T]
  : never;

type Prev6326 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6326<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6326 {
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

type ConfigPaths6326 = Paths6326<NestedConfig6326>;

interface HeavyProps6326 {
  config: DeepPartial6326<NestedConfig6326>;
  path?: ConfigPaths6326;
}

const HeavyComponent6326 = memo(function HeavyComponent6326({ config }: HeavyProps6326) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6326) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6326 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6326: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6326.displayName = 'HeavyComponent6326';
export default HeavyComponent6326;
