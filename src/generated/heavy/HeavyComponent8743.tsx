'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8743<T> = T extends (infer U)[]
  ? DeepReadonlyArray8743<U>
  : T extends object
  ? DeepReadonlyObject8743<T>
  : T;

interface DeepReadonlyArray8743<T> extends ReadonlyArray<DeepReadonly8743<T>> {}

type DeepReadonlyObject8743<T> = {
  readonly [P in keyof T]: DeepReadonly8743<T[P]>;
};

type UnionToIntersection8743<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8743<T> = UnionToIntersection8743<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8743<T extends unknown[], V> = [...T, V];

type TuplifyUnion8743<T, L = LastOf8743<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8743<TuplifyUnion8743<Exclude<T, L>>, L>;

type DeepPartial8743<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8743<T[P]> }
  : T;

type Paths8743<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8743<K, Paths8743<T[K], Prev8743[D]>> : never }[keyof T]
  : never;

type Prev8743 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8743<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8743 {
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

type ConfigPaths8743 = Paths8743<NestedConfig8743>;

interface HeavyProps8743 {
  config: DeepPartial8743<NestedConfig8743>;
  path?: ConfigPaths8743;
}

const HeavyComponent8743 = memo(function HeavyComponent8743({ config }: HeavyProps8743) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8743) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8743 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8743: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8743.displayName = 'HeavyComponent8743';
export default HeavyComponent8743;
