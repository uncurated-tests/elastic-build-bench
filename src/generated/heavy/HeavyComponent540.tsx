'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly540<T> = T extends (infer U)[]
  ? DeepReadonlyArray540<U>
  : T extends object
  ? DeepReadonlyObject540<T>
  : T;

interface DeepReadonlyArray540<T> extends ReadonlyArray<DeepReadonly540<T>> {}

type DeepReadonlyObject540<T> = {
  readonly [P in keyof T]: DeepReadonly540<T[P]>;
};

type UnionToIntersection540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf540<T> = UnionToIntersection540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push540<T extends unknown[], V> = [...T, V];

type TuplifyUnion540<T, L = LastOf540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push540<TuplifyUnion540<Exclude<T, L>>, L>;

type DeepPartial540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial540<T[P]> }
  : T;

type Paths540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join540<K, Paths540<T[K], Prev540[D]>> : never }[keyof T]
  : never;

type Prev540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig540 {
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

type ConfigPaths540 = Paths540<NestedConfig540>;

interface HeavyProps540 {
  config: DeepPartial540<NestedConfig540>;
  path?: ConfigPaths540;
}

const HeavyComponent540 = memo(function HeavyComponent540({ config }: HeavyProps540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent540.displayName = 'HeavyComponent540';
export default HeavyComponent540;
