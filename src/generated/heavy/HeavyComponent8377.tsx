'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8377<T> = T extends (infer U)[]
  ? DeepReadonlyArray8377<U>
  : T extends object
  ? DeepReadonlyObject8377<T>
  : T;

interface DeepReadonlyArray8377<T> extends ReadonlyArray<DeepReadonly8377<T>> {}

type DeepReadonlyObject8377<T> = {
  readonly [P in keyof T]: DeepReadonly8377<T[P]>;
};

type UnionToIntersection8377<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8377<T> = UnionToIntersection8377<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8377<T extends unknown[], V> = [...T, V];

type TuplifyUnion8377<T, L = LastOf8377<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8377<TuplifyUnion8377<Exclude<T, L>>, L>;

type DeepPartial8377<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8377<T[P]> }
  : T;

type Paths8377<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8377<K, Paths8377<T[K], Prev8377[D]>> : never }[keyof T]
  : never;

type Prev8377 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8377<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8377 {
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

type ConfigPaths8377 = Paths8377<NestedConfig8377>;

interface HeavyProps8377 {
  config: DeepPartial8377<NestedConfig8377>;
  path?: ConfigPaths8377;
}

const HeavyComponent8377 = memo(function HeavyComponent8377({ config }: HeavyProps8377) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8377) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8377 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8377: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8377.displayName = 'HeavyComponent8377';
export default HeavyComponent8377;
