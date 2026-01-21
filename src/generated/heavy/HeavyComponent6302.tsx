'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6302<T> = T extends (infer U)[]
  ? DeepReadonlyArray6302<U>
  : T extends object
  ? DeepReadonlyObject6302<T>
  : T;

interface DeepReadonlyArray6302<T> extends ReadonlyArray<DeepReadonly6302<T>> {}

type DeepReadonlyObject6302<T> = {
  readonly [P in keyof T]: DeepReadonly6302<T[P]>;
};

type UnionToIntersection6302<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6302<T> = UnionToIntersection6302<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6302<T extends unknown[], V> = [...T, V];

type TuplifyUnion6302<T, L = LastOf6302<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6302<TuplifyUnion6302<Exclude<T, L>>, L>;

type DeepPartial6302<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6302<T[P]> }
  : T;

type Paths6302<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6302<K, Paths6302<T[K], Prev6302[D]>> : never }[keyof T]
  : never;

type Prev6302 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6302<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6302 {
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

type ConfigPaths6302 = Paths6302<NestedConfig6302>;

interface HeavyProps6302 {
  config: DeepPartial6302<NestedConfig6302>;
  path?: ConfigPaths6302;
}

const HeavyComponent6302 = memo(function HeavyComponent6302({ config }: HeavyProps6302) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6302) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6302 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6302: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6302.displayName = 'HeavyComponent6302';
export default HeavyComponent6302;
