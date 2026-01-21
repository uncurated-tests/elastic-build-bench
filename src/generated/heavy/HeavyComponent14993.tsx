'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14993<T> = T extends (infer U)[]
  ? DeepReadonlyArray14993<U>
  : T extends object
  ? DeepReadonlyObject14993<T>
  : T;

interface DeepReadonlyArray14993<T> extends ReadonlyArray<DeepReadonly14993<T>> {}

type DeepReadonlyObject14993<T> = {
  readonly [P in keyof T]: DeepReadonly14993<T[P]>;
};

type UnionToIntersection14993<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14993<T> = UnionToIntersection14993<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14993<T extends unknown[], V> = [...T, V];

type TuplifyUnion14993<T, L = LastOf14993<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14993<TuplifyUnion14993<Exclude<T, L>>, L>;

type DeepPartial14993<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14993<T[P]> }
  : T;

type Paths14993<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14993<K, Paths14993<T[K], Prev14993[D]>> : never }[keyof T]
  : never;

type Prev14993 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14993<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14993 {
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

type ConfigPaths14993 = Paths14993<NestedConfig14993>;

interface HeavyProps14993 {
  config: DeepPartial14993<NestedConfig14993>;
  path?: ConfigPaths14993;
}

const HeavyComponent14993 = memo(function HeavyComponent14993({ config }: HeavyProps14993) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14993) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14993 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14993: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14993.displayName = 'HeavyComponent14993';
export default HeavyComponent14993;
