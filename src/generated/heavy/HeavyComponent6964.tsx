'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6964<T> = T extends (infer U)[]
  ? DeepReadonlyArray6964<U>
  : T extends object
  ? DeepReadonlyObject6964<T>
  : T;

interface DeepReadonlyArray6964<T> extends ReadonlyArray<DeepReadonly6964<T>> {}

type DeepReadonlyObject6964<T> = {
  readonly [P in keyof T]: DeepReadonly6964<T[P]>;
};

type UnionToIntersection6964<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6964<T> = UnionToIntersection6964<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6964<T extends unknown[], V> = [...T, V];

type TuplifyUnion6964<T, L = LastOf6964<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6964<TuplifyUnion6964<Exclude<T, L>>, L>;

type DeepPartial6964<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6964<T[P]> }
  : T;

type Paths6964<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6964<K, Paths6964<T[K], Prev6964[D]>> : never }[keyof T]
  : never;

type Prev6964 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6964<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6964 {
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

type ConfigPaths6964 = Paths6964<NestedConfig6964>;

interface HeavyProps6964 {
  config: DeepPartial6964<NestedConfig6964>;
  path?: ConfigPaths6964;
}

const HeavyComponent6964 = memo(function HeavyComponent6964({ config }: HeavyProps6964) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6964) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6964 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6964: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6964.displayName = 'HeavyComponent6964';
export default HeavyComponent6964;
