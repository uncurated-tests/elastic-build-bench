'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6288<T> = T extends (infer U)[]
  ? DeepReadonlyArray6288<U>
  : T extends object
  ? DeepReadonlyObject6288<T>
  : T;

interface DeepReadonlyArray6288<T> extends ReadonlyArray<DeepReadonly6288<T>> {}

type DeepReadonlyObject6288<T> = {
  readonly [P in keyof T]: DeepReadonly6288<T[P]>;
};

type UnionToIntersection6288<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6288<T> = UnionToIntersection6288<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6288<T extends unknown[], V> = [...T, V];

type TuplifyUnion6288<T, L = LastOf6288<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6288<TuplifyUnion6288<Exclude<T, L>>, L>;

type DeepPartial6288<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6288<T[P]> }
  : T;

type Paths6288<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6288<K, Paths6288<T[K], Prev6288[D]>> : never }[keyof T]
  : never;

type Prev6288 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6288<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6288 {
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

type ConfigPaths6288 = Paths6288<NestedConfig6288>;

interface HeavyProps6288 {
  config: DeepPartial6288<NestedConfig6288>;
  path?: ConfigPaths6288;
}

const HeavyComponent6288 = memo(function HeavyComponent6288({ config }: HeavyProps6288) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6288) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6288 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6288: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6288.displayName = 'HeavyComponent6288';
export default HeavyComponent6288;
