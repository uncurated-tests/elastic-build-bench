'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8021<T> = T extends (infer U)[]
  ? DeepReadonlyArray8021<U>
  : T extends object
  ? DeepReadonlyObject8021<T>
  : T;

interface DeepReadonlyArray8021<T> extends ReadonlyArray<DeepReadonly8021<T>> {}

type DeepReadonlyObject8021<T> = {
  readonly [P in keyof T]: DeepReadonly8021<T[P]>;
};

type UnionToIntersection8021<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8021<T> = UnionToIntersection8021<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8021<T extends unknown[], V> = [...T, V];

type TuplifyUnion8021<T, L = LastOf8021<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8021<TuplifyUnion8021<Exclude<T, L>>, L>;

type DeepPartial8021<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8021<T[P]> }
  : T;

type Paths8021<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8021<K, Paths8021<T[K], Prev8021[D]>> : never }[keyof T]
  : never;

type Prev8021 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8021<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8021 {
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

type ConfigPaths8021 = Paths8021<NestedConfig8021>;

interface HeavyProps8021 {
  config: DeepPartial8021<NestedConfig8021>;
  path?: ConfigPaths8021;
}

const HeavyComponent8021 = memo(function HeavyComponent8021({ config }: HeavyProps8021) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8021) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8021 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8021: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8021.displayName = 'HeavyComponent8021';
export default HeavyComponent8021;
