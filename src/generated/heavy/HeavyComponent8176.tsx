'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8176<T> = T extends (infer U)[]
  ? DeepReadonlyArray8176<U>
  : T extends object
  ? DeepReadonlyObject8176<T>
  : T;

interface DeepReadonlyArray8176<T> extends ReadonlyArray<DeepReadonly8176<T>> {}

type DeepReadonlyObject8176<T> = {
  readonly [P in keyof T]: DeepReadonly8176<T[P]>;
};

type UnionToIntersection8176<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8176<T> = UnionToIntersection8176<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8176<T extends unknown[], V> = [...T, V];

type TuplifyUnion8176<T, L = LastOf8176<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8176<TuplifyUnion8176<Exclude<T, L>>, L>;

type DeepPartial8176<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8176<T[P]> }
  : T;

type Paths8176<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8176<K, Paths8176<T[K], Prev8176[D]>> : never }[keyof T]
  : never;

type Prev8176 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8176<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8176 {
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

type ConfigPaths8176 = Paths8176<NestedConfig8176>;

interface HeavyProps8176 {
  config: DeepPartial8176<NestedConfig8176>;
  path?: ConfigPaths8176;
}

const HeavyComponent8176 = memo(function HeavyComponent8176({ config }: HeavyProps8176) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8176) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8176 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8176: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8176.displayName = 'HeavyComponent8176';
export default HeavyComponent8176;
