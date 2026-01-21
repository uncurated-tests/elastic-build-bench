'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7587<T> = T extends (infer U)[]
  ? DeepReadonlyArray7587<U>
  : T extends object
  ? DeepReadonlyObject7587<T>
  : T;

interface DeepReadonlyArray7587<T> extends ReadonlyArray<DeepReadonly7587<T>> {}

type DeepReadonlyObject7587<T> = {
  readonly [P in keyof T]: DeepReadonly7587<T[P]>;
};

type UnionToIntersection7587<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7587<T> = UnionToIntersection7587<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7587<T extends unknown[], V> = [...T, V];

type TuplifyUnion7587<T, L = LastOf7587<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7587<TuplifyUnion7587<Exclude<T, L>>, L>;

type DeepPartial7587<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7587<T[P]> }
  : T;

type Paths7587<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7587<K, Paths7587<T[K], Prev7587[D]>> : never }[keyof T]
  : never;

type Prev7587 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7587<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7587 {
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

type ConfigPaths7587 = Paths7587<NestedConfig7587>;

interface HeavyProps7587 {
  config: DeepPartial7587<NestedConfig7587>;
  path?: ConfigPaths7587;
}

const HeavyComponent7587 = memo(function HeavyComponent7587({ config }: HeavyProps7587) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7587) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7587 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7587: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7587.displayName = 'HeavyComponent7587';
export default HeavyComponent7587;
