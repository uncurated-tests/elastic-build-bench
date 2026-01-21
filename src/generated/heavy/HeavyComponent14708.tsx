'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14708<T> = T extends (infer U)[]
  ? DeepReadonlyArray14708<U>
  : T extends object
  ? DeepReadonlyObject14708<T>
  : T;

interface DeepReadonlyArray14708<T> extends ReadonlyArray<DeepReadonly14708<T>> {}

type DeepReadonlyObject14708<T> = {
  readonly [P in keyof T]: DeepReadonly14708<T[P]>;
};

type UnionToIntersection14708<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14708<T> = UnionToIntersection14708<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14708<T extends unknown[], V> = [...T, V];

type TuplifyUnion14708<T, L = LastOf14708<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14708<TuplifyUnion14708<Exclude<T, L>>, L>;

type DeepPartial14708<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14708<T[P]> }
  : T;

type Paths14708<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14708<K, Paths14708<T[K], Prev14708[D]>> : never }[keyof T]
  : never;

type Prev14708 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14708<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14708 {
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

type ConfigPaths14708 = Paths14708<NestedConfig14708>;

interface HeavyProps14708 {
  config: DeepPartial14708<NestedConfig14708>;
  path?: ConfigPaths14708;
}

const HeavyComponent14708 = memo(function HeavyComponent14708({ config }: HeavyProps14708) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14708) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14708 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14708: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14708.displayName = 'HeavyComponent14708';
export default HeavyComponent14708;
