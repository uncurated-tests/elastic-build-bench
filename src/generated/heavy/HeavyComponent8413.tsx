'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8413<T> = T extends (infer U)[]
  ? DeepReadonlyArray8413<U>
  : T extends object
  ? DeepReadonlyObject8413<T>
  : T;

interface DeepReadonlyArray8413<T> extends ReadonlyArray<DeepReadonly8413<T>> {}

type DeepReadonlyObject8413<T> = {
  readonly [P in keyof T]: DeepReadonly8413<T[P]>;
};

type UnionToIntersection8413<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8413<T> = UnionToIntersection8413<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8413<T extends unknown[], V> = [...T, V];

type TuplifyUnion8413<T, L = LastOf8413<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8413<TuplifyUnion8413<Exclude<T, L>>, L>;

type DeepPartial8413<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8413<T[P]> }
  : T;

type Paths8413<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8413<K, Paths8413<T[K], Prev8413[D]>> : never }[keyof T]
  : never;

type Prev8413 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8413<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8413 {
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

type ConfigPaths8413 = Paths8413<NestedConfig8413>;

interface HeavyProps8413 {
  config: DeepPartial8413<NestedConfig8413>;
  path?: ConfigPaths8413;
}

const HeavyComponent8413 = memo(function HeavyComponent8413({ config }: HeavyProps8413) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8413) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8413 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8413: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8413.displayName = 'HeavyComponent8413';
export default HeavyComponent8413;
