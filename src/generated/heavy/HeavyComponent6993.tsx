'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6993<T> = T extends (infer U)[]
  ? DeepReadonlyArray6993<U>
  : T extends object
  ? DeepReadonlyObject6993<T>
  : T;

interface DeepReadonlyArray6993<T> extends ReadonlyArray<DeepReadonly6993<T>> {}

type DeepReadonlyObject6993<T> = {
  readonly [P in keyof T]: DeepReadonly6993<T[P]>;
};

type UnionToIntersection6993<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6993<T> = UnionToIntersection6993<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6993<T extends unknown[], V> = [...T, V];

type TuplifyUnion6993<T, L = LastOf6993<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6993<TuplifyUnion6993<Exclude<T, L>>, L>;

type DeepPartial6993<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6993<T[P]> }
  : T;

type Paths6993<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6993<K, Paths6993<T[K], Prev6993[D]>> : never }[keyof T]
  : never;

type Prev6993 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6993<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6993 {
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

type ConfigPaths6993 = Paths6993<NestedConfig6993>;

interface HeavyProps6993 {
  config: DeepPartial6993<NestedConfig6993>;
  path?: ConfigPaths6993;
}

const HeavyComponent6993 = memo(function HeavyComponent6993({ config }: HeavyProps6993) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6993) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6993 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6993: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6993.displayName = 'HeavyComponent6993';
export default HeavyComponent6993;
