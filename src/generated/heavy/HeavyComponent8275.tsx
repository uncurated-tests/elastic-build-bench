'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8275<T> = T extends (infer U)[]
  ? DeepReadonlyArray8275<U>
  : T extends object
  ? DeepReadonlyObject8275<T>
  : T;

interface DeepReadonlyArray8275<T> extends ReadonlyArray<DeepReadonly8275<T>> {}

type DeepReadonlyObject8275<T> = {
  readonly [P in keyof T]: DeepReadonly8275<T[P]>;
};

type UnionToIntersection8275<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8275<T> = UnionToIntersection8275<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8275<T extends unknown[], V> = [...T, V];

type TuplifyUnion8275<T, L = LastOf8275<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8275<TuplifyUnion8275<Exclude<T, L>>, L>;

type DeepPartial8275<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8275<T[P]> }
  : T;

type Paths8275<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8275<K, Paths8275<T[K], Prev8275[D]>> : never }[keyof T]
  : never;

type Prev8275 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8275<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8275 {
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

type ConfigPaths8275 = Paths8275<NestedConfig8275>;

interface HeavyProps8275 {
  config: DeepPartial8275<NestedConfig8275>;
  path?: ConfigPaths8275;
}

const HeavyComponent8275 = memo(function HeavyComponent8275({ config }: HeavyProps8275) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8275) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8275 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8275: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8275.displayName = 'HeavyComponent8275';
export default HeavyComponent8275;
