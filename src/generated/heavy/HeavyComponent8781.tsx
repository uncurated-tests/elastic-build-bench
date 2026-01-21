'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8781<T> = T extends (infer U)[]
  ? DeepReadonlyArray8781<U>
  : T extends object
  ? DeepReadonlyObject8781<T>
  : T;

interface DeepReadonlyArray8781<T> extends ReadonlyArray<DeepReadonly8781<T>> {}

type DeepReadonlyObject8781<T> = {
  readonly [P in keyof T]: DeepReadonly8781<T[P]>;
};

type UnionToIntersection8781<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8781<T> = UnionToIntersection8781<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8781<T extends unknown[], V> = [...T, V];

type TuplifyUnion8781<T, L = LastOf8781<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8781<TuplifyUnion8781<Exclude<T, L>>, L>;

type DeepPartial8781<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8781<T[P]> }
  : T;

type Paths8781<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8781<K, Paths8781<T[K], Prev8781[D]>> : never }[keyof T]
  : never;

type Prev8781 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8781<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8781 {
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

type ConfigPaths8781 = Paths8781<NestedConfig8781>;

interface HeavyProps8781 {
  config: DeepPartial8781<NestedConfig8781>;
  path?: ConfigPaths8781;
}

const HeavyComponent8781 = memo(function HeavyComponent8781({ config }: HeavyProps8781) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8781) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8781 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8781: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8781.displayName = 'HeavyComponent8781';
export default HeavyComponent8781;
