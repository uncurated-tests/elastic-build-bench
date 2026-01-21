'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8987<T> = T extends (infer U)[]
  ? DeepReadonlyArray8987<U>
  : T extends object
  ? DeepReadonlyObject8987<T>
  : T;

interface DeepReadonlyArray8987<T> extends ReadonlyArray<DeepReadonly8987<T>> {}

type DeepReadonlyObject8987<T> = {
  readonly [P in keyof T]: DeepReadonly8987<T[P]>;
};

type UnionToIntersection8987<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8987<T> = UnionToIntersection8987<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8987<T extends unknown[], V> = [...T, V];

type TuplifyUnion8987<T, L = LastOf8987<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8987<TuplifyUnion8987<Exclude<T, L>>, L>;

type DeepPartial8987<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8987<T[P]> }
  : T;

type Paths8987<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8987<K, Paths8987<T[K], Prev8987[D]>> : never }[keyof T]
  : never;

type Prev8987 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8987<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8987 {
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

type ConfigPaths8987 = Paths8987<NestedConfig8987>;

interface HeavyProps8987 {
  config: DeepPartial8987<NestedConfig8987>;
  path?: ConfigPaths8987;
}

const HeavyComponent8987 = memo(function HeavyComponent8987({ config }: HeavyProps8987) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8987) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8987 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8987: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8987.displayName = 'HeavyComponent8987';
export default HeavyComponent8987;
