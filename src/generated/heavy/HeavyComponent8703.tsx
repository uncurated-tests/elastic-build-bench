'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8703<T> = T extends (infer U)[]
  ? DeepReadonlyArray8703<U>
  : T extends object
  ? DeepReadonlyObject8703<T>
  : T;

interface DeepReadonlyArray8703<T> extends ReadonlyArray<DeepReadonly8703<T>> {}

type DeepReadonlyObject8703<T> = {
  readonly [P in keyof T]: DeepReadonly8703<T[P]>;
};

type UnionToIntersection8703<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8703<T> = UnionToIntersection8703<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8703<T extends unknown[], V> = [...T, V];

type TuplifyUnion8703<T, L = LastOf8703<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8703<TuplifyUnion8703<Exclude<T, L>>, L>;

type DeepPartial8703<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8703<T[P]> }
  : T;

type Paths8703<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8703<K, Paths8703<T[K], Prev8703[D]>> : never }[keyof T]
  : never;

type Prev8703 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8703<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8703 {
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

type ConfigPaths8703 = Paths8703<NestedConfig8703>;

interface HeavyProps8703 {
  config: DeepPartial8703<NestedConfig8703>;
  path?: ConfigPaths8703;
}

const HeavyComponent8703 = memo(function HeavyComponent8703({ config }: HeavyProps8703) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8703) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8703 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8703: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8703.displayName = 'HeavyComponent8703';
export default HeavyComponent8703;
