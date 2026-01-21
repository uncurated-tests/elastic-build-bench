'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8367<T> = T extends (infer U)[]
  ? DeepReadonlyArray8367<U>
  : T extends object
  ? DeepReadonlyObject8367<T>
  : T;

interface DeepReadonlyArray8367<T> extends ReadonlyArray<DeepReadonly8367<T>> {}

type DeepReadonlyObject8367<T> = {
  readonly [P in keyof T]: DeepReadonly8367<T[P]>;
};

type UnionToIntersection8367<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8367<T> = UnionToIntersection8367<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8367<T extends unknown[], V> = [...T, V];

type TuplifyUnion8367<T, L = LastOf8367<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8367<TuplifyUnion8367<Exclude<T, L>>, L>;

type DeepPartial8367<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8367<T[P]> }
  : T;

type Paths8367<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8367<K, Paths8367<T[K], Prev8367[D]>> : never }[keyof T]
  : never;

type Prev8367 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8367<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8367 {
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

type ConfigPaths8367 = Paths8367<NestedConfig8367>;

interface HeavyProps8367 {
  config: DeepPartial8367<NestedConfig8367>;
  path?: ConfigPaths8367;
}

const HeavyComponent8367 = memo(function HeavyComponent8367({ config }: HeavyProps8367) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8367) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8367 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8367: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8367.displayName = 'HeavyComponent8367';
export default HeavyComponent8367;
