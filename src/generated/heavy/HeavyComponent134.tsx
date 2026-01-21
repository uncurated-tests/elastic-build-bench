'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly134<T> = T extends (infer U)[]
  ? DeepReadonlyArray134<U>
  : T extends object
  ? DeepReadonlyObject134<T>
  : T;

interface DeepReadonlyArray134<T> extends ReadonlyArray<DeepReadonly134<T>> {}

type DeepReadonlyObject134<T> = {
  readonly [P in keyof T]: DeepReadonly134<T[P]>;
};

type UnionToIntersection134<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf134<T> = UnionToIntersection134<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push134<T extends unknown[], V> = [...T, V];

type TuplifyUnion134<T, L = LastOf134<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push134<TuplifyUnion134<Exclude<T, L>>, L>;

type DeepPartial134<T> = T extends object
  ? { [P in keyof T]?: DeepPartial134<T[P]> }
  : T;

type Paths134<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join134<K, Paths134<T[K], Prev134[D]>> : never }[keyof T]
  : never;

type Prev134 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join134<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig134 {
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

type ConfigPaths134 = Paths134<NestedConfig134>;

interface HeavyProps134 {
  config: DeepPartial134<NestedConfig134>;
  path?: ConfigPaths134;
}

const HeavyComponent134 = memo(function HeavyComponent134({ config }: HeavyProps134) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 134) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-134 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H134: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent134.displayName = 'HeavyComponent134';
export default HeavyComponent134;
