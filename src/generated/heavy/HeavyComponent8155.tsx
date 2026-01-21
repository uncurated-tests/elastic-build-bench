'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8155<T> = T extends (infer U)[]
  ? DeepReadonlyArray8155<U>
  : T extends object
  ? DeepReadonlyObject8155<T>
  : T;

interface DeepReadonlyArray8155<T> extends ReadonlyArray<DeepReadonly8155<T>> {}

type DeepReadonlyObject8155<T> = {
  readonly [P in keyof T]: DeepReadonly8155<T[P]>;
};

type UnionToIntersection8155<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8155<T> = UnionToIntersection8155<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8155<T extends unknown[], V> = [...T, V];

type TuplifyUnion8155<T, L = LastOf8155<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8155<TuplifyUnion8155<Exclude<T, L>>, L>;

type DeepPartial8155<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8155<T[P]> }
  : T;

type Paths8155<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8155<K, Paths8155<T[K], Prev8155[D]>> : never }[keyof T]
  : never;

type Prev8155 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8155<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8155 {
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

type ConfigPaths8155 = Paths8155<NestedConfig8155>;

interface HeavyProps8155 {
  config: DeepPartial8155<NestedConfig8155>;
  path?: ConfigPaths8155;
}

const HeavyComponent8155 = memo(function HeavyComponent8155({ config }: HeavyProps8155) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8155) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8155 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8155: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8155.displayName = 'HeavyComponent8155';
export default HeavyComponent8155;
