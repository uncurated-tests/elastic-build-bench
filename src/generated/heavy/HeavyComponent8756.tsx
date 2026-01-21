'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8756<T> = T extends (infer U)[]
  ? DeepReadonlyArray8756<U>
  : T extends object
  ? DeepReadonlyObject8756<T>
  : T;

interface DeepReadonlyArray8756<T> extends ReadonlyArray<DeepReadonly8756<T>> {}

type DeepReadonlyObject8756<T> = {
  readonly [P in keyof T]: DeepReadonly8756<T[P]>;
};

type UnionToIntersection8756<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8756<T> = UnionToIntersection8756<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8756<T extends unknown[], V> = [...T, V];

type TuplifyUnion8756<T, L = LastOf8756<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8756<TuplifyUnion8756<Exclude<T, L>>, L>;

type DeepPartial8756<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8756<T[P]> }
  : T;

type Paths8756<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8756<K, Paths8756<T[K], Prev8756[D]>> : never }[keyof T]
  : never;

type Prev8756 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8756<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8756 {
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

type ConfigPaths8756 = Paths8756<NestedConfig8756>;

interface HeavyProps8756 {
  config: DeepPartial8756<NestedConfig8756>;
  path?: ConfigPaths8756;
}

const HeavyComponent8756 = memo(function HeavyComponent8756({ config }: HeavyProps8756) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8756) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8756 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8756: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8756.displayName = 'HeavyComponent8756';
export default HeavyComponent8756;
