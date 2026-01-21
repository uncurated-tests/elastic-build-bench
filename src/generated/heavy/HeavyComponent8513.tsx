'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8513<T> = T extends (infer U)[]
  ? DeepReadonlyArray8513<U>
  : T extends object
  ? DeepReadonlyObject8513<T>
  : T;

interface DeepReadonlyArray8513<T> extends ReadonlyArray<DeepReadonly8513<T>> {}

type DeepReadonlyObject8513<T> = {
  readonly [P in keyof T]: DeepReadonly8513<T[P]>;
};

type UnionToIntersection8513<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8513<T> = UnionToIntersection8513<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8513<T extends unknown[], V> = [...T, V];

type TuplifyUnion8513<T, L = LastOf8513<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8513<TuplifyUnion8513<Exclude<T, L>>, L>;

type DeepPartial8513<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8513<T[P]> }
  : T;

type Paths8513<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8513<K, Paths8513<T[K], Prev8513[D]>> : never }[keyof T]
  : never;

type Prev8513 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8513<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8513 {
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

type ConfigPaths8513 = Paths8513<NestedConfig8513>;

interface HeavyProps8513 {
  config: DeepPartial8513<NestedConfig8513>;
  path?: ConfigPaths8513;
}

const HeavyComponent8513 = memo(function HeavyComponent8513({ config }: HeavyProps8513) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8513) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8513 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8513: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8513.displayName = 'HeavyComponent8513';
export default HeavyComponent8513;
