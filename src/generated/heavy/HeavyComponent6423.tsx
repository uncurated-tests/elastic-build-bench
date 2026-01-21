'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6423<T> = T extends (infer U)[]
  ? DeepReadonlyArray6423<U>
  : T extends object
  ? DeepReadonlyObject6423<T>
  : T;

interface DeepReadonlyArray6423<T> extends ReadonlyArray<DeepReadonly6423<T>> {}

type DeepReadonlyObject6423<T> = {
  readonly [P in keyof T]: DeepReadonly6423<T[P]>;
};

type UnionToIntersection6423<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6423<T> = UnionToIntersection6423<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6423<T extends unknown[], V> = [...T, V];

type TuplifyUnion6423<T, L = LastOf6423<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6423<TuplifyUnion6423<Exclude<T, L>>, L>;

type DeepPartial6423<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6423<T[P]> }
  : T;

type Paths6423<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6423<K, Paths6423<T[K], Prev6423[D]>> : never }[keyof T]
  : never;

type Prev6423 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6423<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6423 {
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

type ConfigPaths6423 = Paths6423<NestedConfig6423>;

interface HeavyProps6423 {
  config: DeepPartial6423<NestedConfig6423>;
  path?: ConfigPaths6423;
}

const HeavyComponent6423 = memo(function HeavyComponent6423({ config }: HeavyProps6423) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6423) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6423 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6423: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6423.displayName = 'HeavyComponent6423';
export default HeavyComponent6423;
