'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8250<T> = T extends (infer U)[]
  ? DeepReadonlyArray8250<U>
  : T extends object
  ? DeepReadonlyObject8250<T>
  : T;

interface DeepReadonlyArray8250<T> extends ReadonlyArray<DeepReadonly8250<T>> {}

type DeepReadonlyObject8250<T> = {
  readonly [P in keyof T]: DeepReadonly8250<T[P]>;
};

type UnionToIntersection8250<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8250<T> = UnionToIntersection8250<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8250<T extends unknown[], V> = [...T, V];

type TuplifyUnion8250<T, L = LastOf8250<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8250<TuplifyUnion8250<Exclude<T, L>>, L>;

type DeepPartial8250<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8250<T[P]> }
  : T;

type Paths8250<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8250<K, Paths8250<T[K], Prev8250[D]>> : never }[keyof T]
  : never;

type Prev8250 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8250<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8250 {
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

type ConfigPaths8250 = Paths8250<NestedConfig8250>;

interface HeavyProps8250 {
  config: DeepPartial8250<NestedConfig8250>;
  path?: ConfigPaths8250;
}

const HeavyComponent8250 = memo(function HeavyComponent8250({ config }: HeavyProps8250) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8250) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8250 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8250: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8250.displayName = 'HeavyComponent8250';
export default HeavyComponent8250;
