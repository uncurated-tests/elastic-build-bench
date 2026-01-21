'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8300<T> = T extends (infer U)[]
  ? DeepReadonlyArray8300<U>
  : T extends object
  ? DeepReadonlyObject8300<T>
  : T;

interface DeepReadonlyArray8300<T> extends ReadonlyArray<DeepReadonly8300<T>> {}

type DeepReadonlyObject8300<T> = {
  readonly [P in keyof T]: DeepReadonly8300<T[P]>;
};

type UnionToIntersection8300<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8300<T> = UnionToIntersection8300<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8300<T extends unknown[], V> = [...T, V];

type TuplifyUnion8300<T, L = LastOf8300<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8300<TuplifyUnion8300<Exclude<T, L>>, L>;

type DeepPartial8300<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8300<T[P]> }
  : T;

type Paths8300<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8300<K, Paths8300<T[K], Prev8300[D]>> : never }[keyof T]
  : never;

type Prev8300 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8300<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8300 {
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

type ConfigPaths8300 = Paths8300<NestedConfig8300>;

interface HeavyProps8300 {
  config: DeepPartial8300<NestedConfig8300>;
  path?: ConfigPaths8300;
}

const HeavyComponent8300 = memo(function HeavyComponent8300({ config }: HeavyProps8300) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8300) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8300 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8300: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8300.displayName = 'HeavyComponent8300';
export default HeavyComponent8300;
