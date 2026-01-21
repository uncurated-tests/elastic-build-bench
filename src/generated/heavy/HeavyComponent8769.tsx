'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8769<T> = T extends (infer U)[]
  ? DeepReadonlyArray8769<U>
  : T extends object
  ? DeepReadonlyObject8769<T>
  : T;

interface DeepReadonlyArray8769<T> extends ReadonlyArray<DeepReadonly8769<T>> {}

type DeepReadonlyObject8769<T> = {
  readonly [P in keyof T]: DeepReadonly8769<T[P]>;
};

type UnionToIntersection8769<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8769<T> = UnionToIntersection8769<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8769<T extends unknown[], V> = [...T, V];

type TuplifyUnion8769<T, L = LastOf8769<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8769<TuplifyUnion8769<Exclude<T, L>>, L>;

type DeepPartial8769<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8769<T[P]> }
  : T;

type Paths8769<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8769<K, Paths8769<T[K], Prev8769[D]>> : never }[keyof T]
  : never;

type Prev8769 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8769<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8769 {
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

type ConfigPaths8769 = Paths8769<NestedConfig8769>;

interface HeavyProps8769 {
  config: DeepPartial8769<NestedConfig8769>;
  path?: ConfigPaths8769;
}

const HeavyComponent8769 = memo(function HeavyComponent8769({ config }: HeavyProps8769) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8769) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8769 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8769: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8769.displayName = 'HeavyComponent8769';
export default HeavyComponent8769;
