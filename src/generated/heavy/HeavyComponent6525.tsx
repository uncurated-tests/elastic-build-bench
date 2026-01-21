'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6525<T> = T extends (infer U)[]
  ? DeepReadonlyArray6525<U>
  : T extends object
  ? DeepReadonlyObject6525<T>
  : T;

interface DeepReadonlyArray6525<T> extends ReadonlyArray<DeepReadonly6525<T>> {}

type DeepReadonlyObject6525<T> = {
  readonly [P in keyof T]: DeepReadonly6525<T[P]>;
};

type UnionToIntersection6525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6525<T> = UnionToIntersection6525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6525<T extends unknown[], V> = [...T, V];

type TuplifyUnion6525<T, L = LastOf6525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6525<TuplifyUnion6525<Exclude<T, L>>, L>;

type DeepPartial6525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6525<T[P]> }
  : T;

type Paths6525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6525<K, Paths6525<T[K], Prev6525[D]>> : never }[keyof T]
  : never;

type Prev6525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6525 {
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

type ConfigPaths6525 = Paths6525<NestedConfig6525>;

interface HeavyProps6525 {
  config: DeepPartial6525<NestedConfig6525>;
  path?: ConfigPaths6525;
}

const HeavyComponent6525 = memo(function HeavyComponent6525({ config }: HeavyProps6525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6525.displayName = 'HeavyComponent6525';
export default HeavyComponent6525;
