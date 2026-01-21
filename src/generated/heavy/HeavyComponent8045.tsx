'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8045<T> = T extends (infer U)[]
  ? DeepReadonlyArray8045<U>
  : T extends object
  ? DeepReadonlyObject8045<T>
  : T;

interface DeepReadonlyArray8045<T> extends ReadonlyArray<DeepReadonly8045<T>> {}

type DeepReadonlyObject8045<T> = {
  readonly [P in keyof T]: DeepReadonly8045<T[P]>;
};

type UnionToIntersection8045<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8045<T> = UnionToIntersection8045<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8045<T extends unknown[], V> = [...T, V];

type TuplifyUnion8045<T, L = LastOf8045<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8045<TuplifyUnion8045<Exclude<T, L>>, L>;

type DeepPartial8045<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8045<T[P]> }
  : T;

type Paths8045<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8045<K, Paths8045<T[K], Prev8045[D]>> : never }[keyof T]
  : never;

type Prev8045 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8045<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8045 {
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

type ConfigPaths8045 = Paths8045<NestedConfig8045>;

interface HeavyProps8045 {
  config: DeepPartial8045<NestedConfig8045>;
  path?: ConfigPaths8045;
}

const HeavyComponent8045 = memo(function HeavyComponent8045({ config }: HeavyProps8045) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8045) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8045 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8045: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8045.displayName = 'HeavyComponent8045';
export default HeavyComponent8045;
