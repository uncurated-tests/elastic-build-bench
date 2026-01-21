'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8256<T> = T extends (infer U)[]
  ? DeepReadonlyArray8256<U>
  : T extends object
  ? DeepReadonlyObject8256<T>
  : T;

interface DeepReadonlyArray8256<T> extends ReadonlyArray<DeepReadonly8256<T>> {}

type DeepReadonlyObject8256<T> = {
  readonly [P in keyof T]: DeepReadonly8256<T[P]>;
};

type UnionToIntersection8256<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8256<T> = UnionToIntersection8256<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8256<T extends unknown[], V> = [...T, V];

type TuplifyUnion8256<T, L = LastOf8256<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8256<TuplifyUnion8256<Exclude<T, L>>, L>;

type DeepPartial8256<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8256<T[P]> }
  : T;

type Paths8256<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8256<K, Paths8256<T[K], Prev8256[D]>> : never }[keyof T]
  : never;

type Prev8256 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8256<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8256 {
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

type ConfigPaths8256 = Paths8256<NestedConfig8256>;

interface HeavyProps8256 {
  config: DeepPartial8256<NestedConfig8256>;
  path?: ConfigPaths8256;
}

const HeavyComponent8256 = memo(function HeavyComponent8256({ config }: HeavyProps8256) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8256) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8256 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8256: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8256.displayName = 'HeavyComponent8256';
export default HeavyComponent8256;
