'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8739<T> = T extends (infer U)[]
  ? DeepReadonlyArray8739<U>
  : T extends object
  ? DeepReadonlyObject8739<T>
  : T;

interface DeepReadonlyArray8739<T> extends ReadonlyArray<DeepReadonly8739<T>> {}

type DeepReadonlyObject8739<T> = {
  readonly [P in keyof T]: DeepReadonly8739<T[P]>;
};

type UnionToIntersection8739<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8739<T> = UnionToIntersection8739<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8739<T extends unknown[], V> = [...T, V];

type TuplifyUnion8739<T, L = LastOf8739<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8739<TuplifyUnion8739<Exclude<T, L>>, L>;

type DeepPartial8739<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8739<T[P]> }
  : T;

type Paths8739<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8739<K, Paths8739<T[K], Prev8739[D]>> : never }[keyof T]
  : never;

type Prev8739 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8739<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8739 {
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

type ConfigPaths8739 = Paths8739<NestedConfig8739>;

interface HeavyProps8739 {
  config: DeepPartial8739<NestedConfig8739>;
  path?: ConfigPaths8739;
}

const HeavyComponent8739 = memo(function HeavyComponent8739({ config }: HeavyProps8739) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8739) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8739 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8739: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8739.displayName = 'HeavyComponent8739';
export default HeavyComponent8739;
