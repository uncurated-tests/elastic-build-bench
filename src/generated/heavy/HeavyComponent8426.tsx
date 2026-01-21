'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8426<T> = T extends (infer U)[]
  ? DeepReadonlyArray8426<U>
  : T extends object
  ? DeepReadonlyObject8426<T>
  : T;

interface DeepReadonlyArray8426<T> extends ReadonlyArray<DeepReadonly8426<T>> {}

type DeepReadonlyObject8426<T> = {
  readonly [P in keyof T]: DeepReadonly8426<T[P]>;
};

type UnionToIntersection8426<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8426<T> = UnionToIntersection8426<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8426<T extends unknown[], V> = [...T, V];

type TuplifyUnion8426<T, L = LastOf8426<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8426<TuplifyUnion8426<Exclude<T, L>>, L>;

type DeepPartial8426<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8426<T[P]> }
  : T;

type Paths8426<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8426<K, Paths8426<T[K], Prev8426[D]>> : never }[keyof T]
  : never;

type Prev8426 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8426<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8426 {
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

type ConfigPaths8426 = Paths8426<NestedConfig8426>;

interface HeavyProps8426 {
  config: DeepPartial8426<NestedConfig8426>;
  path?: ConfigPaths8426;
}

const HeavyComponent8426 = memo(function HeavyComponent8426({ config }: HeavyProps8426) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8426) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8426 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8426: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8426.displayName = 'HeavyComponent8426';
export default HeavyComponent8426;
