'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8869<T> = T extends (infer U)[]
  ? DeepReadonlyArray8869<U>
  : T extends object
  ? DeepReadonlyObject8869<T>
  : T;

interface DeepReadonlyArray8869<T> extends ReadonlyArray<DeepReadonly8869<T>> {}

type DeepReadonlyObject8869<T> = {
  readonly [P in keyof T]: DeepReadonly8869<T[P]>;
};

type UnionToIntersection8869<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8869<T> = UnionToIntersection8869<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8869<T extends unknown[], V> = [...T, V];

type TuplifyUnion8869<T, L = LastOf8869<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8869<TuplifyUnion8869<Exclude<T, L>>, L>;

type DeepPartial8869<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8869<T[P]> }
  : T;

type Paths8869<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8869<K, Paths8869<T[K], Prev8869[D]>> : never }[keyof T]
  : never;

type Prev8869 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8869<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8869 {
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

type ConfigPaths8869 = Paths8869<NestedConfig8869>;

interface HeavyProps8869 {
  config: DeepPartial8869<NestedConfig8869>;
  path?: ConfigPaths8869;
}

const HeavyComponent8869 = memo(function HeavyComponent8869({ config }: HeavyProps8869) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8869) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8869 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8869: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8869.displayName = 'HeavyComponent8869';
export default HeavyComponent8869;
