'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly653<T> = T extends (infer U)[]
  ? DeepReadonlyArray653<U>
  : T extends object
  ? DeepReadonlyObject653<T>
  : T;

interface DeepReadonlyArray653<T> extends ReadonlyArray<DeepReadonly653<T>> {}

type DeepReadonlyObject653<T> = {
  readonly [P in keyof T]: DeepReadonly653<T[P]>;
};

type UnionToIntersection653<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf653<T> = UnionToIntersection653<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push653<T extends unknown[], V> = [...T, V];

type TuplifyUnion653<T, L = LastOf653<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push653<TuplifyUnion653<Exclude<T, L>>, L>;

type DeepPartial653<T> = T extends object
  ? { [P in keyof T]?: DeepPartial653<T[P]> }
  : T;

type Paths653<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join653<K, Paths653<T[K], Prev653[D]>> : never }[keyof T]
  : never;

type Prev653 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join653<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig653 {
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

type ConfigPaths653 = Paths653<NestedConfig653>;

interface HeavyProps653 {
  config: DeepPartial653<NestedConfig653>;
  path?: ConfigPaths653;
}

const HeavyComponent653 = memo(function HeavyComponent653({ config }: HeavyProps653) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 653) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-653 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H653: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent653.displayName = 'HeavyComponent653';
export default HeavyComponent653;
