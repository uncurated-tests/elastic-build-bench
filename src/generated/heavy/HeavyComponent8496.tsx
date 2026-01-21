'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8496<T> = T extends (infer U)[]
  ? DeepReadonlyArray8496<U>
  : T extends object
  ? DeepReadonlyObject8496<T>
  : T;

interface DeepReadonlyArray8496<T> extends ReadonlyArray<DeepReadonly8496<T>> {}

type DeepReadonlyObject8496<T> = {
  readonly [P in keyof T]: DeepReadonly8496<T[P]>;
};

type UnionToIntersection8496<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8496<T> = UnionToIntersection8496<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8496<T extends unknown[], V> = [...T, V];

type TuplifyUnion8496<T, L = LastOf8496<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8496<TuplifyUnion8496<Exclude<T, L>>, L>;

type DeepPartial8496<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8496<T[P]> }
  : T;

type Paths8496<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8496<K, Paths8496<T[K], Prev8496[D]>> : never }[keyof T]
  : never;

type Prev8496 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8496<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8496 {
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

type ConfigPaths8496 = Paths8496<NestedConfig8496>;

interface HeavyProps8496 {
  config: DeepPartial8496<NestedConfig8496>;
  path?: ConfigPaths8496;
}

const HeavyComponent8496 = memo(function HeavyComponent8496({ config }: HeavyProps8496) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8496) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8496 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8496: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8496.displayName = 'HeavyComponent8496';
export default HeavyComponent8496;
