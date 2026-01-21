'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6587<T> = T extends (infer U)[]
  ? DeepReadonlyArray6587<U>
  : T extends object
  ? DeepReadonlyObject6587<T>
  : T;

interface DeepReadonlyArray6587<T> extends ReadonlyArray<DeepReadonly6587<T>> {}

type DeepReadonlyObject6587<T> = {
  readonly [P in keyof T]: DeepReadonly6587<T[P]>;
};

type UnionToIntersection6587<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6587<T> = UnionToIntersection6587<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6587<T extends unknown[], V> = [...T, V];

type TuplifyUnion6587<T, L = LastOf6587<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6587<TuplifyUnion6587<Exclude<T, L>>, L>;

type DeepPartial6587<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6587<T[P]> }
  : T;

type Paths6587<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6587<K, Paths6587<T[K], Prev6587[D]>> : never }[keyof T]
  : never;

type Prev6587 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6587<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6587 {
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

type ConfigPaths6587 = Paths6587<NestedConfig6587>;

interface HeavyProps6587 {
  config: DeepPartial6587<NestedConfig6587>;
  path?: ConfigPaths6587;
}

const HeavyComponent6587 = memo(function HeavyComponent6587({ config }: HeavyProps6587) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6587) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6587 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6587: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6587.displayName = 'HeavyComponent6587';
export default HeavyComponent6587;
