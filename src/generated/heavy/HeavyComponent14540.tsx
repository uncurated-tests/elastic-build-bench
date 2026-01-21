'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14540<T> = T extends (infer U)[]
  ? DeepReadonlyArray14540<U>
  : T extends object
  ? DeepReadonlyObject14540<T>
  : T;

interface DeepReadonlyArray14540<T> extends ReadonlyArray<DeepReadonly14540<T>> {}

type DeepReadonlyObject14540<T> = {
  readonly [P in keyof T]: DeepReadonly14540<T[P]>;
};

type UnionToIntersection14540<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14540<T> = UnionToIntersection14540<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14540<T extends unknown[], V> = [...T, V];

type TuplifyUnion14540<T, L = LastOf14540<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14540<TuplifyUnion14540<Exclude<T, L>>, L>;

type DeepPartial14540<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14540<T[P]> }
  : T;

type Paths14540<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14540<K, Paths14540<T[K], Prev14540[D]>> : never }[keyof T]
  : never;

type Prev14540 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14540<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14540 {
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

type ConfigPaths14540 = Paths14540<NestedConfig14540>;

interface HeavyProps14540 {
  config: DeepPartial14540<NestedConfig14540>;
  path?: ConfigPaths14540;
}

const HeavyComponent14540 = memo(function HeavyComponent14540({ config }: HeavyProps14540) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14540) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14540 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14540: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14540.displayName = 'HeavyComponent14540';
export default HeavyComponent14540;
