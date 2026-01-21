'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6325<T> = T extends (infer U)[]
  ? DeepReadonlyArray6325<U>
  : T extends object
  ? DeepReadonlyObject6325<T>
  : T;

interface DeepReadonlyArray6325<T> extends ReadonlyArray<DeepReadonly6325<T>> {}

type DeepReadonlyObject6325<T> = {
  readonly [P in keyof T]: DeepReadonly6325<T[P]>;
};

type UnionToIntersection6325<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6325<T> = UnionToIntersection6325<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6325<T extends unknown[], V> = [...T, V];

type TuplifyUnion6325<T, L = LastOf6325<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6325<TuplifyUnion6325<Exclude<T, L>>, L>;

type DeepPartial6325<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6325<T[P]> }
  : T;

type Paths6325<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6325<K, Paths6325<T[K], Prev6325[D]>> : never }[keyof T]
  : never;

type Prev6325 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6325<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6325 {
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

type ConfigPaths6325 = Paths6325<NestedConfig6325>;

interface HeavyProps6325 {
  config: DeepPartial6325<NestedConfig6325>;
  path?: ConfigPaths6325;
}

const HeavyComponent6325 = memo(function HeavyComponent6325({ config }: HeavyProps6325) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6325) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6325 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6325: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6325.displayName = 'HeavyComponent6325';
export default HeavyComponent6325;
