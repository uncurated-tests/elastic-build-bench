'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8131<T> = T extends (infer U)[]
  ? DeepReadonlyArray8131<U>
  : T extends object
  ? DeepReadonlyObject8131<T>
  : T;

interface DeepReadonlyArray8131<T> extends ReadonlyArray<DeepReadonly8131<T>> {}

type DeepReadonlyObject8131<T> = {
  readonly [P in keyof T]: DeepReadonly8131<T[P]>;
};

type UnionToIntersection8131<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8131<T> = UnionToIntersection8131<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8131<T extends unknown[], V> = [...T, V];

type TuplifyUnion8131<T, L = LastOf8131<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8131<TuplifyUnion8131<Exclude<T, L>>, L>;

type DeepPartial8131<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8131<T[P]> }
  : T;

type Paths8131<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8131<K, Paths8131<T[K], Prev8131[D]>> : never }[keyof T]
  : never;

type Prev8131 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8131<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8131 {
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

type ConfigPaths8131 = Paths8131<NestedConfig8131>;

interface HeavyProps8131 {
  config: DeepPartial8131<NestedConfig8131>;
  path?: ConfigPaths8131;
}

const HeavyComponent8131 = memo(function HeavyComponent8131({ config }: HeavyProps8131) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8131) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8131 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8131: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8131.displayName = 'HeavyComponent8131';
export default HeavyComponent8131;
