'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6436<T> = T extends (infer U)[]
  ? DeepReadonlyArray6436<U>
  : T extends object
  ? DeepReadonlyObject6436<T>
  : T;

interface DeepReadonlyArray6436<T> extends ReadonlyArray<DeepReadonly6436<T>> {}

type DeepReadonlyObject6436<T> = {
  readonly [P in keyof T]: DeepReadonly6436<T[P]>;
};

type UnionToIntersection6436<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6436<T> = UnionToIntersection6436<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6436<T extends unknown[], V> = [...T, V];

type TuplifyUnion6436<T, L = LastOf6436<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6436<TuplifyUnion6436<Exclude<T, L>>, L>;

type DeepPartial6436<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6436<T[P]> }
  : T;

type Paths6436<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6436<K, Paths6436<T[K], Prev6436[D]>> : never }[keyof T]
  : never;

type Prev6436 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6436<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6436 {
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

type ConfigPaths6436 = Paths6436<NestedConfig6436>;

interface HeavyProps6436 {
  config: DeepPartial6436<NestedConfig6436>;
  path?: ConfigPaths6436;
}

const HeavyComponent6436 = memo(function HeavyComponent6436({ config }: HeavyProps6436) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6436) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6436 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6436: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6436.displayName = 'HeavyComponent6436';
export default HeavyComponent6436;
